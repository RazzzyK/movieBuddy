import { store } from '../redux/Store';
import '../css/StaticPage.css';


export const UserSettings = () => {
  const email = store.getState().user.user.email;
  const firstName = store.getState().user.user.firstName;
  const lastName = store.getState().user.user.lastName;

  return (
    <div className="">
          <label htmlFor="chk" aria-hidden="true">Settings Page</label>
          {/* <input type="text" id="firstname" name="firstname" placeholder="First name" required=""value={formData.firstname} onChange={handleInputChange} /> */}
          {/* <input type="text" id="lastname" name="lastname" placeholder="Last name" required=""value={formData.lastname} onChange={handleInputChange} /> */}
          <label className='label-format'>First Name:</label>
          <input type="email" id="email" name="email" placeholder="Email" required=""value={firstName} /> {/*onChange={handleInputChange}  */}
          <label className='label-format'>Last Name:</label>
          <input type="email" id="email" name="email" placeholder="Email" required=""value={lastName} /> {/*onChange={handleInputChange}  */}
          <label className='label-format'>Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" required=""value={email} /> {/*onChange={handleInputChange}  */}
          {/* <input type="password" id="password" name="password" placeholder="Password" required=""value={formData.password} onChange={handleInputChange} /> */}
          
  </div>
  );
};