import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem("resume");
const parseItems = items ? JSON.parse(items) : null;

const initialState = parseItems || {

    resume:[],
   
}

const authSlice = createSlice({
    
    name:"resume",
    initialState,
    reducers:{


      addPersonalInfo:(state,action) =>{

        const resumeObj =  state.resume.find((res) => res.id == action.payload.id);

        if(!resumeObj.personalInfo){

          resumeObj.personalInfo = {};
        }

        resumeObj.personalInfo = {...resumeObj.personalInfo,...action.payload.info}
        localStorage.setItem("resume",JSON.stringify(state));
      },


        addSummary:(state,action) =>{

          const resumeObj = state.resume.find((res) => res.id == action.payload.id);

          if(!resumeObj.personalInfo){

            resumeObj.personalInfo = {};
          }

          resumeObj.personalInfo = {...resumeObj.personalInfo,...action.payload.summary};
          localStorage.setItem("resume",JSON.stringify(state));
        },

        createResume:(state,action) =>{

            state.resume.push(action.payload);
            localStorage.setItem("resume",JSON.stringify(state))

        },

        updateResumeTitle:(state,action) =>{

          const resumeObj = state.resume.find((res) => res.id == action.payload.id);
          resumeObj.name = action.payload.name;
          localStorage.setItem("resume",JSON.stringify(state));

        },

        deleteResume:(state,action) =>{

          state.resume = state.resume.filter((res) => res.id != action.payload)
          localStorage.setItem("resume",JSON.stringify(state));

        },

        addExperience:(state,action) =>{

          const obj  =  state.resume.find((res) => res.id == action.payload.id);
          
          if(obj){

            if(!obj.experience){

                obj.experience = [];
            }
          }



         obj.experience.push(action.payload.exp);
         localStorage.setItem("resume",JSON.stringify(state));

            
        },

        updateExperience:(state,action) =>{

          const obj = state.resume.find((res) => res.id == action.payload.id);
          const index =   obj.experience.findIndex((exp) => exp.id == action.payload.exp.id);
          obj.experience[index] = action.payload.exp;
          localStorage.setItem("resume",JSON.stringify(state));


        },


        deleteExperience:(state,action) =>{


            const obj = state.resume.find((res)=> res.id == action.payload.id);
            obj.experience = obj.experience.filter((exp) => exp.id != action.payload.exp.id);
            localStorage.setItem("resume",JSON.stringify(state));

        },


        addEducation:(state,action) =>{

          const obj  =  state.resume.find((res) => res.id == action.payload.id);
          
          if(obj){

            if(!obj.education){

                obj.education = [];
            }
          }



         obj.education.push(action.payload.educ);
         localStorage.setItem("resume",JSON.stringify(state));

            
        },

        updateEducation:(state,action) =>{

          const obj = state.resume.find((res) => res.id == action.payload.id);
          const index =   obj.education.findIndex((edu) => edu.id == action.payload.educ.id);
          obj.education[index] = action.payload.educ;
          localStorage.setItem("resume",JSON.stringify(state));


        },


        deleteEducation:(state,action) =>{


            const obj = state.resume.find((res)=> res.id == action.payload.id);
            obj.education = obj.education.filter((edu) => edu.id != action.payload.educ.id);
            localStorage.setItem("resume",JSON.stringify(state));

        },

          addProject:(state,action) =>{

          const obj  =  state.resume.find((res) => res.id == action.payload.id);
          
          if(obj){

            if(!obj.project){

                obj.project = [];
            }
          }



         obj.project.push(action.payload.proj);
         localStorage.setItem("resume",JSON.stringify(state));

            
        },

        updateProject:(state,action) =>{

          const obj = state.resume.find((res) => res.id == action.payload.id);
          const index =   obj.project.findIndex((p) => p.id == action.payload.proj.id);
          obj.project[index] = action.payload.proj;
          localStorage.setItem("resume",JSON.stringify(state));


        },


        deleteProject:(state,action) =>{


            const obj = state.resume.find((res)=> res.id == action.payload.id);
            obj.project = obj.project.filter((p) => p.id != action.payload.proj.id);
            localStorage.setItem("resume",JSON.stringify(state));

        },

        addSkill:(state,action) =>{

          const resumeObj = state.resume.find((res) => res.id == action.payload.id);

          if(!resumeObj.skills){
             
              resumeObj.skills = [];
          }

           resumeObj.skills = action.payload.skill
           localStorage.setItem("resume",JSON.stringify(state));

        },

        logoutResume:(state) =>{

          state.resume = [];
          localStorage.removeItem("resume");
        },

        insertAllResumes:(state,action) =>{

          state.resume = action.payload;
          localStorage.setItem("resume",JSON.stringify(state));

        },

  
        
    }

})

export const {addPersonalInfo,addSummary,createResume,updateResumeTitle,deleteResume,addExperience,updateExperience,deleteExperience,addEducation,updateEducation,deleteEducation,
  addProject,updateProject,deleteProject,addSkill,logoutResume,insertAllResumes} = authSlice.actions;
export default authSlice.reducer;