import PropTypes from 'prop-types';
import { Span, Li, Button } from './ContactList.styled';

export const ContactList = ({ contacts, removeItem }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            <Span>{name}: </Span>
            <Span>{number}</Span>
            <Button
              type="button"
              onClick={() => {
                removeItem(id);
              }}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
