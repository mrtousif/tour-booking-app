import axios from 'axios';
import displayAlert from './alerts';

// data is an object and type is either password or data
export const updateUserAccount = async (data, type) => {
    try {
        const url =
            type === 'password'
                ? 'http://127.0.0.1:8000/api/v1/users/update-password'
                : 'http://127.0.0.1:8000/api/v1/users/update-me';

        const res = await axios({
            method: 'PATCH',
            url,
            data
        });

        if (res.data.status === 'success') {
            displayAlert('success', 'Updated successfully');
        }
    } catch (error) {
        displayAlert('error', error.response.data.message);
    }
};

// export const updateUserPassword = async (
//     currentPassword,
//     password,
//     confirmPassword
// ) => {
//     try {
//         const res = await axios({
//             method: 'PATCH',
//             url: 'http://127.0.0.1:8000/api/v1/users/update-password',
//             data: { currentPassword, password, confirmPassword }
//         });

//         if (res.data.status === 'success') {
//             displayAlert('success', 'Updated successfully');
//         }
//     } catch (error) {
//         displayAlert('error', error.response.data.message);
//     }
// };
