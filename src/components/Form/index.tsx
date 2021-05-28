import { FormContainer, FieldContainer, FieldLabelContainer, SelectContainer, RadioContainer } from "./styles";

export interface FormProps {}

const Form: React.FC<FormProps> = () => (
  <FormContainer>
    <form>
      <FieldContainer>
        <FieldLabelContainer>Brand</FieldLabelContainer>
        <SelectContainer>
          <option value="">-- Choose a brand --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </SelectContainer>
      </FieldContainer>

      <FieldContainer>
        <FieldLabelContainer>Year</FieldLabelContainer>
        <SelectContainer>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </SelectContainer>
      </FieldContainer>

      <FieldContainer>
        <FieldLabelContainer>Plan</FieldLabelContainer>
        <RadioContainer type="radio" name="plan" value="basic" /><span>Basic</span>
        <RadioContainer type="radio" name="plan" value="full" /><span>Full</span>
      </FieldContainer>

      <button type="button">Calculate</button>
    </form>
  </FormContainer>
);

export default Form;
