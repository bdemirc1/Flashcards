import { createSlice } from "@reduxjs/toolkit"; 
import { addQuizByIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) =>{
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizCombined = (quiz) => {
    const { topicId, id} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizByIdForTopic({
            topicId: topicId,
            quizId: id
        }));   
    };
};

export const selectQuizzes = state => state.quizzes.quizzes;
export const quizzesReducer = quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;