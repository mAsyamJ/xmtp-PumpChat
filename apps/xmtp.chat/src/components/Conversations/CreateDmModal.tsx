import { Box, Button, Group, TextInput, Text } from "@mantine/core";
import { Utils, type Conversation } from "@xmtp/browser-sdk";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "@/components/Modal";
import type { ContentTypes } from "@/contexts/XMTPContext";
import { isValidEthereumAddress, isValidInboxId } from "@/helpers/strings";
import { useCollapsedMediaQuery } from "@/hooks/useCollapsedMediaQuery";
import { useConversations } from "@/hooks/useConversations";
import { useSettings } from "@/hooks/useSettings";
import { ContentLayout } from "@/layouts/ContentLayout";

export const CreateDmModal: React.FC = () => {
  const { newDm, newDmWithIdentifier } = useConversations();
  const [loading, setLoading] = useState(false);
  const [memberId, setMemberId] = useState<string>("");
  const [memberIdError, setMemberIdError] = useState<string | null>(null);
  const { environment } = useSettings();
  const utilsRef = useRef<Utils | null>(null);
  const navigate = useNavigate();
  const fullScreen = useCollapsedMediaQuery();
  const contentHeight = fullScreen ? "auto" : 500;

  const handleClose = useCallback(() => {
    void navigate(-1);
  }, [navigate]);

  const handleCreate = async () => {
    setLoading(true);

    try {
      let conversation: Conversation<ContentTypes>;

      if (isValidEthereumAddress(memberId)) {
        conversation = await newDmWithIdentifier({
          identifier: memberId,
          identifierKind: "Ethereum",
        });
      } else {
        conversation = await newDm(memberId);
      }

      void navigate(`/conversations/${conversation.id}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const utils = new Utils();
    utilsRef.current = utils;
    return () => {
      utils.close();
    };
  }, []);

  useEffect(() => {
    const checkMemberId = async () => {
      if (!memberId) {
        setMemberIdError(null);
        return;
      }

      if (!isValidEthereumAddress(memberId) && !isValidInboxId(memberId)) {
        setMemberIdError("Invalid address or inbox ID");
      } else if (isValidEthereumAddress(memberId) && utilsRef.current) {
        const inboxId = await utilsRef.current.getInboxIdForIdentifier(
          {
            identifier: memberId.toLowerCase(),
            identifierKind: "Ethereum",
          },
          environment,
        );
        if (!inboxId) {
          setMemberIdError("Address not registered on XMTP");
        } else {
          setMemberIdError(null);
        }
      } else {
        setMemberIdError(null);
      }
    };

    void checkMemberId();
  }, [memberId]);

  const footer = useMemo(() => {
    return (
      <Group justify="flex-end" flex={1} p="md">
        <Button
          variant="subtle"
          onClick={handleClose}
          styles={{
            root: {
              color: 'var(--mantine-color-gray-6)',
              '&:hover': {
                backgroundColor: 'var(--mantine-color-gray-1)',
              },
            },
          }}>
          Cancel
        </Button>
        <Button
          variant="filled"
          disabled={loading || memberIdError !== null}
          loading={loading}
          onClick={() => void handleCreate()}
          styles={{
            root: {
              background: 'linear-gradient(45deg, #2e8eff 0%, #00bcd4 100%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1e7ee6 0%, #00a3b3 100%)',
              },
              '&:disabled': {
                background: 'var(--mantine-color-gray-4)',
              },
            },
          }}>
          Create
        </Button>
      </Group>
    );
  }, [handleClose, handleCreate, loading, memberIdError]);

  return (
    <Modal
      closeOnClickOutside={false}
      closeOnEscape={false}
      withCloseButton={false}
      opened
      centered
      fullScreen={fullScreen}
      onClose={handleClose}
      size="600"
      padding={0}>
      <ContentLayout
        title="Create direct message"
        maxHeight={contentHeight}
        footer={footer}
        withScrollAreaPadding={false}>
        <Box p="md">
          <TextInput
            size="md"
            label="Address or inbox ID"
            placeholder="Enter an Ethereum address or inbox ID"
            aria-label="Address or inbox ID input"
            description="Enter a valid Ethereum address (0x...) or XMTP inbox ID"
            styles={{
              label: {
                marginBottom: "var(--mantine-spacing-xxs)",
                fontSize: "var(--mantine-font-size-sm)",
                fontWeight: 500,
              },
              description: {
                marginTop: "var(--mantine-spacing-xxs)",
                fontSize: "var(--mantine-font-size-xs)",
                color: "var(--mantine-color-gray-6)",
              },
              input: {
                '&:focus': {
                  borderColor: 'var(--mantine-color-blue-5)',
                  boxShadow: '0 0 0 2px rgba(46, 142, 255, 0.2)',
                },
                '&:focus-within': {
                  borderColor: 'var(--mantine-color-blue-5)',
                  boxShadow: '0 0 0 2px rgba(46, 142, 255, 0.2)',
                },
              },
            }}
            error={memberIdError}
            value={memberId}
            onChange={(event) => {
              setMemberId(event.target.value);
            }}
          />
          {memberIdError && (
            <Text size="xs" c="red" mt="xs">
              {memberIdError}
            </Text>
          )}
        </Box>
      </ContentLayout>
    </Modal>
  );
};
