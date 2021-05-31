import styled from '@emotion/styled';

export const FormContainer = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

export const FieldContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

export const FieldLabelContainer = styled.label`
    flex: 0 0 100px;
`;

export const SelectContainer = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

export const RadioContainer = styled.input`
    margin: 0 1rem;
`;

export const ButtonContainer = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
    }
`;