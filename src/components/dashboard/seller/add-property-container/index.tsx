"use client";
import { useAppSelector } from "@/utils/hooks/react-redux/store/hook";
import AddPropertyStepOne from "./step-one";
import AddPropertyStepTwo from "./step-two";
import AddPropertyStepThree from "./step-three";
import AddPropertyStepFour from "./step-four";
import AddPropertyStepFive from "./step-five";

const AddPropertyContainer = () => {
  const id = useAppSelector((state) => state.stepsId.id);
  return id == 1 ? (
    <AddPropertyStepOne />
  ) : id == 2 ? (
    <AddPropertyStepTwo />
  ) : id == 3 ? (
    <AddPropertyStepThree />
  ) : id == 4 ? (
    <AddPropertyStepFour />
  ) : (
    <AddPropertyStepFive />
  );
};
export default AddPropertyContainer;
