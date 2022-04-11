import React, { useRef, useState } from "react";
import "./form.css";
import FormField from "../formField/FormField";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useDispatch, useSelector } from "react-redux";
import { storeUserData } from "../../redux/action/action";
import { useNavigate } from "react-router";
import ProfileIcon from "./../../assets/profile-icon.jpg";

const initialValues = {
  profile: "",
  name: "",
  email: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  isLoggedIn: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").min(15),
  email: Yup.string().email("Invalid email format").required("Required "),
  phoneNo: Yup.string()
    .max(10)
    .min(10)
    .phone("IN", true)
    .required("Required Field"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  profile: Yup.mixed()
    .required("Image Required!")
    .test("fileSize", "File must be less than 2MB", (value) => {
      return value !== undefined && value && value.size < 2000000;
    }),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Form() {
  const reduxStoreData = useSelector((state) => state);
  const userData = reduxStoreData.userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const [profile, setProfile] = useState(ProfileIcon);

  const onProfileChangeHandler = (event) => {
    const profileURL = URL.createObjectURL(event.currentTarget.files[0]);
    formik.setFieldValue("profile", event.currentTarget.files[0]);
    setProfile(profileURL);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      const reader = new FileReader();
      reader.readAsDataURL(values.profile);
      reader.onloadend = () => {
        const newuser = { ...values, isLoggedIn: true, profile: reader.result };
        localStorage.setItem("userDetails", JSON.stringify(newuser));
      };
      console.log(formik.values);
      console.log(values);
      const reduxData = {
        ...values,
        isLoggedIn: true,
        profile: URL.createObjectURL(values.profile),
      };
      dispatch(storeUserData(reduxData));
      navigate("/home");
      resetForm();
    },
    validationSchema,
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <h2>SignUp</h2>
        </div>

        <div className="profile-picture">
          <img src={profile} alt="" />
        </div>
        <button
          type="button"
          className="add-photo"
          name="profile"
          onClick={() => profileRef.current.click()}
        >
          Photo +
        </button>
        <input
          value={undefined}
          type="file"
          ref={profileRef}
          name="profile"
          className="d-none"
          onChange={onProfileChangeHandler}
        />
        {formik.touched.profile && formik.errors.profile ? (
          <div style={{ color: "Red", marginLeft: 70, marginTop: 0 }}>
            {formik.errors.profile}
          </div>
        ) : null}
        <FormField
          labelName="Name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
        <FormField
          labelName="Email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <FormField
          labelName="PhoneNo"
          type="number"
          name="phoneNo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNo}
          error={formik.errors.phoneNo}
          touched={formik.touched.phoneNo}
        />
        <FormField
          labelName="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <FormField
          labelName="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-danger"
          onClick={() => formik.resetForm()}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
