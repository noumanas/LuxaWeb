import axios from "axios";
import Swal from "sweetalert2";

export const contactApiHandelr = async (data) => {
  try {
    const res = await axios.post(
      "https://getform.io/f/1621a23a-ab1c-4b32-ad13-0d67726b16e4",
      {
        name: data.name,
        email: data.email,
        message: data.message,
      }
    );
    {
      res.status === 200 &&
        Swal.fire({
          icon: "success",
          iconColor: "#A2D255",
          title: `Hello ${data.name}`,
          html: `Thank you for contacting us. One of our representative will be contact you soon.`,
          color: "#000",
          showConfirmButton: false,
          timer: 5000,
        });
    }
  } catch (error) {
    console.log(error);
  }
};

// export const quoteApiHelper = async (data, phoneNumber) => {
//   try {
//     const res = await axios.post(
//       "https://getform.io/f/df52533f-44b9-480a-b132-0e0e4aba04a1",
//       {
//         name: data.name,
//         email: data.email,
//         phoneNumber: phoneNumber,
//         industry: data.industry,
//         message: data.message,
//       }
//     );
//     {
//       res.status === 200 &&
//         Swal.fire({
//           icon: "success",
//           iconColor: "#2C35CD",
//           title: `Hello ${data.name}`,
//           html: `Thank you for contacting us. One of our representative will be contact you soon.`,
//           color: "#000",
//           showConfirmButton: false,
//           timer: 5000,
//         });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const packageOrderApiHandelr = async (data) => {
//   try {
//     const res = await axios.post(
//       "https://getform.io/f/18491b03-b8c9-4b1f-83fa-c606a6c28718",
//       {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         phone: data.phone,
//         address: data.address,
//         companyName: data.companyName,
//         country: data.country,
//         state: data.state,
//         city: data.city,
//       }
//     );
//     {
//       res.status === 200 &&
//         Swal.fire({
//           icon: "success",
//           iconColor: "#2C35CD",
//           title: `Hello ${data.firstName}`,
//           html: `Thank you for select this package. One of our representative will be contact you soon.`,
//           color: "#000",
//           showConfirmButton: false,
//           timer: 5000,
//         });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
