import { rerenderEntireTree } from "../render";

let state = {
    nameData: [
        { src: 1, name: "Mary", mes: "How are you?" },
        { src: 2, name: "Lola", mes: "Hi!" },
        { src: 3, name: "Donna", mes: "O no!" },
        { src: 4, name: "Margo", mes: "Yo!" },
        { src: 5, name: "Kattie", mes: "How are you?" },
        { src: 6, name: "Don", mes: "Of course!" },
        { src: 7, name: "Mama", mes: "Mammy!" },
        { src: 8, name: "Papa", mes: "How are you?" }
    ],
    messageData: [
        { src: "1", name: "Mary", message: "Hey, How are you?" },
        { src: "2", name: "Donna", message: "Hello!" },
        { src: "3", name: "Lola", message: "Yo Yo Mary!" }
    ],
    newPostText: "Здесь будет текст!",
};

export let addPost = () => {
    let newPost = {
        src: '4',
        name: "Margo",
        message: state.newPostText
    };
    state.messageData.push(newPost);
    state.newPostText = "";
    rerenderEntireTree(state);

};
// которая через аргумент будет принимать новый введенный текст  newText
//  и функция будет вставлять в объект  state этот новый текст
export let updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;