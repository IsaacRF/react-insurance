import React, { ChangeEvent, FormEvent, useState } from "react";
import { getDifferenceYears } from "../../helpers";
import {
  FormContainer,
  FieldContainer,
  FieldLabelContainer,
  SelectContainer,
  RadioContainer,
  ButtonContainer,
  ErrorContainer,
} from "./styles";
import { Data } from "./types";

export interface FormProps {}

/**
 * Form component to introduce insurance data
 * @returns
 */
const Form: React.FC<FormProps> = () => {
  const [data, setData] = useState<Data>({
    brand: "",
    year: "",
    plan: "basic",
  });
  const [error, setError] = useState(false);

  /**
   * Set state whenever any form info changes
   * @param e
   */
  function onInfoChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  /**
   * Calculate insurance with data specified
   * @param e
   */
  function calculateInsurance(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (data.brand.trim() === '' || data.year.trim() === '' || data.plan.trim() === '') {
      setError(true);
      return;
    }

    let result = 2000;

    // Get years difference. Every year is a 3% less in the price
    const diffYears = getDifferenceYears(data.year);
    result -= (diffYears * 3 * result / 100);



    console.log(result);
    setError(false);
  }

  return (
    <FormContainer>
      <form onSubmit={calculateInsurance}>
        { error && <ErrorContainer>All fields are mandatory</ErrorContainer>}

        <FieldContainer>
          <FieldLabelContainer>Brand</FieldLabelContainer>
          <SelectContainer name="brand" value={data.brand} onChange={onInfoChange}>
            <option value="">-- Choose a brand --</option>
            <option value="american">American</option>
            <option value="european">European</option>
            <option value="asian">Asian</option>
          </SelectContainer>
        </FieldContainer>

        <FieldContainer>
          <FieldLabelContainer>Year</FieldLabelContainer>
          <SelectContainer name="year" value={data.year} onChange={onInfoChange}>
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
          <RadioContainer
            type="radio"
            name="plan"
            value="basic"
            checked={data.plan === "basic"}
            onChange={onInfoChange}
          />
          <span>Basic</span>
          <RadioContainer
            type="radio"
            name="plan"
            value="full"
            checked={data.plan === "full"}
            onChange={onInfoChange}
          />
          <span>Full</span>
        </FieldContainer>

        <ButtonContainer type="submit">Calculate</ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Form;
