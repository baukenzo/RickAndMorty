import {Button, styled, TextField} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";


const Form = styled('form')`
  display: flex;
  flex-direction: column;
`
export function SignUpForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const validateForm = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            alert("PASSWORD'S LENGTH MUST BE MORE THAN 8 SYMBOLS")
            return
        }

        // proverka na spec simbol
        if (!password.match(/[^A-Za-z0-9]+/g)) {
            alert("PASSWORD MUST HAVE 1 SPECIAL SYMBOL")
            return
        }

        // proverka na spec simbol
        if (!password.match(/([A-Z])/)) {
            alert("PASSWORD MUST HAVE 1 BOLSHOI REGISTER")
            return
        }

        // proverka na spec simbol
        if (!password.match(/([a-z])/)) {
            alert("PASSWORD MUST HAVE 1 MALENKI REGISTER")
            return
        }

        // proverka na cifru
        if (!password.match(/\d/)) {
            alert("PASSWORD MUST HAVE 1 NUMBER")
            return
        }

        // proverka na cifru PODRYAD
        // if (!password.match(/\d/)) {
        //     alert("PASSWORD MUST NOT HAVE SAME NUMBERS PODRYAD")
        //     return
        // }

        if (cPassword !== password) {
            alert("PASSWORDS ARE NOT SAME!")
            return;
        }

        const data = {
            email,
            password,
        }
        sendUserData(data)
        // onSuccess(data)
    }



    function sendUserData(userData) {
        axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
            {
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }
        )
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log({...error})
            alert(`User not registered. Error message: ${error.response.data.error.message}`)
        })
    }



    return (
        <Form onSubmit={validateForm}>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small" type="email" label="Email" placeholder="Enter email" required
            />
            <br />
            <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small" type="password" label="Password" placeholder="Enter password" required />
            <br />
            <TextField
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                size="small" type="password" label="Confirm Password" placeholder="Enter password" required />
            <br />
            <Button type="submit" variant="contained">Sign Up</Button>
        </Form>
    )
}

// const red = [1, 2, 3, 4, 5]
// console.log(red.reduce((acc, b) =>acc+b));

// function toBinary(number) {
//     let num = number;
//     let binary = (num % 2).toString();
//     console.log(binary)

//     for (; num > 1;) {
//         num = parseInt(num / 2);
//         console.log(num)
//         binary = (num % 2) + binary
//     }
//     console.log(binary)
// }

// toBinary(65)

// const x = [1, 2, 4, 5 , 6, 7, 8, 9]

// function indexOff(value, arr) {
//     let index;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == value) {
//             index = i
//             break
//         }
//     }
//     return index
// }
// console.log(indexOff(7, x))

// console.log(parseInt(13/2))
// const xx = [1, 2, 3, 4, 5 , 6, 7, 8, 9]
// function binarySearch(value, arr) {
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end){
//         let middle = parseInt((start+end)/2)
//         if (arr[middle] == value) return middle
//         if (arr[middle] > value) {
//             end = middle - 1
//         }
//         if (arr[middle] < value) {
//             start = middle + 1
//         }    
//     }

// }
// console.log(binarySearch(8, xx))

// let array = [2, 3, 9, 15, 1, 8]
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j <arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 const t = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = t;
//             }
//         }
//     }

//     return arr
// }
// console.log(bubbleSort(array))



// let array2 = [0,7, 3, 2, 9, 15, 1, 1, 1, 2, 2, 8]
// function quickSort (arr) {
//     if (arr.length < 2) return arr;

//     const pivot = arr[0],
//           left = [],
//           rigth = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             left.push(arr[i])
//         } else {
//             rigth.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(rigth)]
// }
// console.log(quickSort(array2))



// const towers = [8, 7, 9, 8, 4, 9, 10, 9, 8, 18, 9];
// function visibleTowers(towers) {
//     let max = towers[0];
//     for (let i = 0; i < towers.length; i++) {
//         if (towers[i] > max) {
//             max = towers[i];
//         }
//     }

//     let current = 0;
//     let counter = 0;

//     for (let i = 1; i <= towers.indexOf(max); i++) {
//         if (towers[i] > current) {
//             counter++;
//             current = towers[i]
//         }
//     }
//     return counter;
// }
// console.log(visibleTowers(towers))



// function caesar(text, number) {
//     let res = [];
//     for (let i = 0; i < text.length; i++) {
//         let code = text.charCodeAt(i) + number
//         while (code > 122) {
//             code = (code - 122) + 96
//         }
//         res.push(String.fromCharCode(code))
//     }
//     return res.join('')
// }

// console.log(caesar('How are you doing?', 10))