import { useState } from "react";

const ContactForm = ({ handleModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email Address is required";
    if (!formData.queryType) newErrors.queryType = "Query Type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must give your consent";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data:", formData);
      setErrors({});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
      handleModal();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 mx-3 mt-5 md:w-[60%] md:mx-auto lg:w-[50%]">
      <h1 className="text-2xl font-bold mb-4 text-grey-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="md:grid grid-cols-2 gap-5">
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="pl-2 text-green-600">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="pl-2 text-green-600">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="pl-2 text-green-600">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div className="mb-5">
          <h2 className="mb-2">
            Query Type <span className="pl-2 text-green-600">*</span>
          </h2>
          <div className="md:grid grid-cols-2 gap-5">
            <div className="border mb-3 md:mb-0 border-slate-600 rounded-lg p-2 flex gap-2 pl-5">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                value="general enquiry"
                className="w-5"
                checked={formData.queryType === "general enquiry"}
                onChange={handleChange}
              />
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </div>
            <div className="border border-slate-600 rounded-lg p-2 flex gap-2 pl-5">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value="support request"
                className="w-5"
                checked={formData.queryType === "support request"}
                onChange={handleChange}
              />
              <label htmlFor="supportRequest">Support Request</label>
            </div>
          </div>
          {errors.queryType && (
            <p className="text-red-600">{errors.queryType}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <span className="pl-2 text-green-600">*</span>
          </label>
          <textarea
            className="form-input h-44"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>
        <div className="flex gap-3 mb-9">
          <input
            className="w-5"
            type="checkbox"
            name="consent"
            id="check"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label htmlFor="check">
            I consent to being contacted by the team
          </label>
          {errors.consent && <p className="text-red-600">{errors.consent}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 py-5 rounded-lg text-white hover:bg-grey-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
