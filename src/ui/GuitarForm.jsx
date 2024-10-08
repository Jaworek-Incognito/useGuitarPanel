import { Input } from "./FormInput";
import { Label } from "./FormLabel";
import { ErrorMessage } from "@hookform/error-message";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import { StyledError } from "./FormError";
import { Option, Select } from "./FormSelect";
import { useEffect } from "react";

const defaultValues = {
  name: "",
  pickups: "",
  body: "",
  price: "",
  neck: "",
  stringsNumber: "",
  bridgePickup: "",
  neckPickup: "",
  middlePickup: "",
  pickupActive: "",
  fretsNumber: "",
  lefthanded: "",
};

function GuitarForm({ isWorking, isEditing, product, register, errors }) {
  const { reset } = useForm();
  useEffect(() => {
    reset(defaultValues);

    if (isEditing) {
      reset(product);
    }
  }, [reset, product, isEditing]);
  return (
    <>
      <FormRow>
        <Label id="name">Name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="noDiscountPrice">No Discount Price (in cents)</Label>
        <Input
          type="number"
          id="noDiscountPrice"
          disabled={isWorking}
          {...register("noDiscountPrice", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="noDiscountPrice"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="discount">Discount (%)</Label>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="discount"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>

      <FormRow>
        <Label id="subcategory">Subcategory</Label>
        <Select
          name="subcategory"
          disabled={isWorking}
          {...register("subcategory", { required: "This field is required" })}
        >
          <Option value="electric guitar">Electric Guitar</Option>
          <Option value="classical guitar">Classical Guitar</Option>
          <Option value="bass guitar">Bass Guitar</Option>
          <Option value="acoustic guitar">Acoustic Guitar</Option>
        </Select>
        <ErrorMessage
          errors={errors}
          name="subcategory"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="body">Body</Label>
        <Input
          type="text"
          id="body"
          disabled={isWorking}
          {...register("body", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="body"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="neck">Neck</Label>
        <Input
          type="text"
          id="neck"
          disabled={isWorking}
          {...register("neck", {
            required: "This field is required",
          })}
        />

        <ErrorMessage
          errors={errors}
          name="neck"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="stringsNumber">Strings number</Label>
        <Input
          type="number"
          id="stringsNumber"
          disabled={isWorking}
          {...register("stringsNumber", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="stringsNumber"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="pickups">Pickups</Label>
        <Select name="pickups" disabled={isWorking} {...register("pickups")}>
          <Option value="">No pickups</Option>
          <Option value="H">H</Option>
          <Option value="HH">HH</Option>
          <Option value="HHH">HHH</Option>
          <Option value="S">S</Option>
          <Option value="SS">SS</Option>
          <Option value="SSS">SSS</Option>
          <Option value="HS">HS</Option>
          <Option value="HHS">HHS</Option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="bridgePickup">Bridge pickup</Label>
        <Input
          type="text"
          id="bridgePickup"
          disabled={isWorking}
          {...register("bridgePickup")}
        />
      </FormRow>
      <FormRow>
        <Label id="neckPickup">Neck pickup</Label>
        <Input
          type="text"
          id="neckPickup"
          disabled={isWorking}
          {...register("neckPickup")}
        />
      </FormRow>
      <FormRow>
        <Label id="middlePickup">Middle pickup</Label>
        <Input
          type="text"
          id="middlePickup"
          disabled={isWorking}
          {...register("middlePickup")}
        />
      </FormRow>
      <FormRow>
        <Label id="pickupsActive">Pickups active</Label>
        <Select
          name="pickupsActive"
          disabled={isWorking}
          {...register("pickupsActive")}
        >
          <Option value={""}>No pickups</Option>
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="fretsNumber">Frets number</Label>
        <Input
          type="number"
          id="fretsNumber"
          disabled={isWorking}
          {...register("fretsNumber", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="fretsNumber"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="lefthanded">Lefthanded</Label>
        <Select
          name="lefthanded"
          disabled={isWorking}
          {...register("lefthanded")}
        >
          <Option value={false}>No</Option>
          <Option value={true}>Yes</Option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="tremolo">Tremolo</Label>
        <Select name="tremolo" disabled={isWorking} {...register("tremolo")}>
          <Option value={false}>No</Option>
          <Option value={true}>Yes</Option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="pickupType">Pickup type</Label>
        <Select
          name="pickupType"
          disabled={isWorking}
          {...register("pickupType")}
        >
          <Option value={""}>No pickups</Option>
          <Option value={"humbucker"}>Humbucker</Option>
          <Option value={"single coil"}>Single coil</Option>
          <Option value={"mixed"}>Mixed</Option>
        </Select>
      </FormRow>
    </>
  );
}

export default GuitarForm;
