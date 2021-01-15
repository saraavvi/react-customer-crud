import React, { useContext } from "react";
import InputField from "../Components/InputField";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory, Link } from "react-router-dom";
import { StyledForm } from "../Styles/FormStyles";
import { PrimaryButton, CancelButton } from "../Styles/ButtonStyles";

export default function CustomerEditPage(props) {
  const history = useHistory();
  const {
    currentCustomer,
    customerList,
    setCustomerList,
    getCustomers,
  } = useContext(CustomerListContext);
  //TODO: fixa så det går att mappa ut inpufields istället??
  const customerId = props.match.params.id;
  function handleOnSubmit(e) {
    //här behövs customerList uppdateras med den nya datan för att vara uppdaterad i customer list
    // ta detta item och ändra på den i arrayen??
    e.preventDefault();

    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("userToken");
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(currentCustomer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(customerList);
        //denna data ska läggas in på rätt plats i customerList för att den ska synas på listpage.
        // updateListItem(data);
        getCustomers();
        history.push(`/home/${customerId}`);
      });
  }

  //   function updateListItem(data) {
  //     const newList = customerList.map((item) => {
  //       console.log(data);
  //       console.log(item.id);
  //       if (item.id == customerId) {
  //         return data;
  //       } else {
  //         return item;
  //       }
  //     });
  //     console.log("new list:", newList);
  //     setCustomerList(newList);
  //   }
  return (
    <div>
      {currentCustomer && (
        <>
          <StyledForm onSubmit={handleOnSubmit}>
            <h1>Edit Customer</h1>
            <InputField
              value={currentCustomer.name}
              name="name"
              label="Customer Name"
            />
            <InputField
              value={currentCustomer.email}
              name="email"
              label="Customer Email"
              type="email"
            />
            <InputField
              value={currentCustomer.organisationNr}
              name="organisationNr"
              label="Organisation Number"
              type="number"
            />
            <InputField
              value={currentCustomer.paymentTerm}
              name="paymentTerm"
              label="Payment Term"
              type="number"
            />
            <InputField
              value={currentCustomer.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />
            <InputField
              value={currentCustomer.reference}
              name="reference"
              label="Reference"
            />
            <InputField
              value={currentCustomer.vatNr}
              name="vatNr"
              label="Vat Number"
            />
            <InputField
              value={currentCustomer.website}
              name="website"
              label="Website"
              type="url"
            />

            <PrimaryButton type="submit">Update</PrimaryButton>
            <Link to={`/home/${customerId}`}>
              <CancelButton>Cancel</CancelButton>
            </Link>
          </StyledForm>
        </>
      )}
    </div>
  );
}
