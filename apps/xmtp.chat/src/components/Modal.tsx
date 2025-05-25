import { Modal as MantineModal, type ModalProps } from "@mantine/core";

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <MantineModal
      {...props}
      radius="md"
      styles={{
        root: {
          '& .mantine-Modal-overlay': {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          },
        },
        content: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: '#0e0e0e',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
        },
        body: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: '#0e0e0e',
        },
        header: {
          backgroundColor: '#0e0e0e',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        close: {
          color: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      }}>
      {children}
    </MantineModal>
  );
};
