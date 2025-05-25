import {
  Button,
  CloseButton,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import type { Client } from "@xmtp/browser-sdk";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { BadgeWithCopy } from "@/components/BadgeWithCopy";
import { InstallationTable } from "@/components/Identity/InstallationTable";
import { Modal } from "@/components/Modal";
import { useCollapsedMediaQuery } from "@/hooks/useCollapsedMediaQuery";
import { useIdentity } from "@/hooks/useIdentity";
import { ContentLayout } from "@/layouts/ContentLayout";

export const IdentityModal: React.FC = () => {
  const navigate = useNavigate();
  const { client } = useOutletContext<{ client: Client }>();
  const {
    installations,
    revokeAllOtherInstallations,
    revoking,
    sync,
    syncing,
  } = useIdentity(true);
  const [accountIdentifier, setAccountIdentifier] = useState<string | null>(
    null,
  );

  const fullScreen = useCollapsedMediaQuery();
  const contentHeight = fullScreen ? "auto" : "70dvh";

  useEffect(() => {
    setAccountIdentifier(
      client.accountIdentifier?.identifier.toLowerCase() ?? null,
    );
  }, [client.accountIdentifier]);

  const handleRevokeAllOtherInstallations = useCallback(async () => {
    await revokeAllOtherInstallations();
    await sync();
  }, [revokeAllOtherInstallations, sync]);

  const handleClose = useCallback(() => {
    void navigate(-1);
  }, [navigate]);

  return (
    <>
      <Modal
        opened
        centered
        withCloseButton={false}
        fullScreen={fullScreen}
        onClose={handleClose}
        size="auto"
        padding={0}>
        <ContentLayout
          maxHeight={contentHeight}
          loading={revoking || syncing}
          withScrollAreaPadding={false}
          title={
            <Group justify="space-between" align="center" flex={1}>
              <Text size="lg" fw={700} c="text.primary">
                Identity
              </Text>
              <CloseButton size="md" onClick={handleClose} />
            </Group>
          }>
          <Stack gap="md" p="md">
            <Paper p="md" radius="md" withBorder bg="#1e2433">
              <Stack gap="md">
                <Group gap="md" wrap="nowrap">
                  <Text flex="0 0 25%" style={{ whiteSpace: "nowrap" }} c="white">
                    Address
                  </Text>
                  <BadgeWithCopy value={accountIdentifier || ""} />
                </Group>
                <Group gap="md" wrap="nowrap">
                  <Text flex="0 0 25%" style={{ whiteSpace: "nowrap" }} c="white">
                    Inbox ID
                  </Text>
                  {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                  <BadgeWithCopy value={client.inboxId!} />
                </Group>
                <Group gap="md" wrap="nowrap">
                  <Text flex="0 0 25%" style={{ whiteSpace: "nowrap" }} c="white">
                    Installation ID
                  </Text>
                  {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                  <BadgeWithCopy value={client.installationId!} />
                </Group>
              </Stack>
            </Paper>
            <Title order={4} ml="md" c="white">
              Installations
            </Title>
            <Paper p="md" radius="md" withBorder bg="#1e2433">
              <Stack gap="md">
                {installations.length === 0 && (
                  <Text c="white">No other installations found</Text>
                )}
                {installations.length > 0 && (
                  <>
                    <InstallationTable
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      clientInstallationId={client.installationId!}
                      installations={installations}
                      refreshInstallations={sync}
                    />
                    <Group justify="flex-end">
                      <Button
                        variant="outline"
                        color="red"
                        onClick={() =>
                          void handleRevokeAllOtherInstallations()
                        }>
                        Revoke all other installations
                      </Button>
                    </Group>
                  </>
                )}
              </Stack>
            </Paper>
          </Stack>
        </ContentLayout>
      </Modal>
    </>
  );
};
