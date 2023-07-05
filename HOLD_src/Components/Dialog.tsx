import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { UserInterface } from '../Interfaces/User.interface';


export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  user?: UserInterface;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, user } = props;

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle sx={{ textAlign: 'center' }}>Veuillez confirmer la suppression de {user?.name} ?</DialogTitle>
        {
            user ? (
            <List sx={{ py: 0 }}>
                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemButton
                        onClick={() => handleListItemClick('removeUser')}
                    >
                        <ListItemText primary="Valider la suppression" className='btn-danger' />
                    </ListItemButton>
                </ListItem>

                <ListItem disableGutters sx={{ py: 0 }}>
                    <ListItemButton
                        onClick={() => handleListItemClick('cancel')}
                    >
                        <ListItemText primary="Annuler" className='btn-cancel strong' />
                    </ListItemButton>
                </ListItem>

            </List>
            ) : (
            <>
            {/* Write your logic here */}
            </>
            )}
    </Dialog>
  );
}
