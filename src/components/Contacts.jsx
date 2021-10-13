import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
  textdec: {
      textDecoration: 'none',
  }
}));

function ContactList() {
  const classes = useStyles();

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    ContactsGet()
  }, [])
  
  const ContactsGet = () => {
    fetch('http://localhost:3001/contacts')
      .then(res => res.json())
      .then(
        (result) => {
          setContacts(result)
        }
      )
  }
  const VoirContact = id => {
    window.location= '/watch/'+id
  }
  const UpdateContact = id => {
    window.location = '/update/'+id
  }

  const DeleteContact = id => {
    var data = {
      'id': id
    }
    fetch('http://localhost:3001/contacts/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        if (result) {
          ContactsGet();
        }
      }
    )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Liste des contacts
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
              <Button variant="extended" color="primary">
                Ajouter Contact
               </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} >
            <TableHead>
              <TableRow>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="left">Prenom</TableCell>
                <TableCell align="left">Numero</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell align="center">{contact.nom}</TableCell>
                  <TableCell align="left">{contact.prenom}</TableCell>
                  <TableCell align="left">{contact.tel}</TableCell>
                  <TableCell align="left">{contact.email}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary">
                      <Button onClick={() => VoirContact(contact.id)}>Voir</Button>
                      <Button onClick={() => UpdateContact(contact.id)}>Mettre à Jour</Button>
                      <Button onClick={() => DeleteContact(contact.id)}>Supprimer</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}

export default ContactList