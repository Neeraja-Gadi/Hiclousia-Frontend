//  import React, { useState } from 'react';
//  import { makeStyles } from '@material-ui/core/styles';
//  import TextField from '@material-ui/core/TextField';
//  import { Button, Typography } from '@material-ui/core';
//  import { Add, Remove} from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       paddingTop: theme.spacing(1),
//       paddingLeft : theme.spacing(1),
//       paddingBottom : theme.spacing(3),
//       [theme.breakpoints.down('sm')]: {
//       },
//       width: '70ch',
//     },

//        color: theme.palette.primary.main ,
//        background: '#8ec9ff',
//        boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//        padding: '50px 30px',
//        margin : "0px,500px"
//   },
//   // feildColor: {
//   //   color: "#000080"
//   // },
//   addButton: {
//     margin: theme.spacing(5),

//   },
//   removeButton: {
//     margin: theme.spacing(5),

//   },
// }));

// const userId = JSON.parse(localStorage.getItem("userDetails"))

// function ProjectForm() {
//   const classes = useStyles();
//   const [projectData, setProjectData] = useState([
//     {
//       userDetailsID: userId._id,
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: ''
//     }
//   ]
//   );


//   const handleAddProject = () => {

//     const projects = [...projectData, {
//       userDetailsID: userId._id,
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: ''
//     }];

//     setProjectData(
//       projects
//     );
//   }

//   const handleRemoveProject = (index) => {
//     const projects = [...projectData];
//     projects.splice(index, 1);
//     setProjectData(
//       projects
//     );
//   };

//   const handleProjectChange = (event, index) => {

//     const { name, value } = event.target;

//     const projects = [...projectData];
//     projects[index] = {
//       ...projectData[index],
//       [name]: value
//     };
//     setProjectData(projects);
//   }

//   function SaveProject() {
//     console.log(projectData)
//     let projectInfo = projectData;
//     projectInfo?.map((e, index) => {
//      return  fetch("http://localhost:8000/project", {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(e)

//       }).then(response => response.json().then(data => {
//         console.log(data)
//         if (data.status === false) return false
//         else{

//           setProjectData( [{
//             userDetailsID: userId._id,
//             projectTitle: '',
//             description: '',
//             skillsUsed: '',
//             startDate: '',
//             endDate: '',
//             Url: '',
//             organizationName: ''
//           }])

//         }
//       }
//       ))
//     })
//     return true
//   }


//   const handleSubmit = async (event) => {
//     event.preventDefault();

//    SaveProject() 
//     alert("Profile submitted sccessfully")

//     // alert(JSON.stringify(projectData));
//   };
//   return (
//     <form className={classes.root} onSubmit={handleSubmit}>
//       <Typography textAlign="center" variant="h6" gutterBottom>
//         Projects :
//       </Typography>
//       {projectData?.map((project, index) => (
//         <div key={index}>
//           <TextField
//             label="Project Title"
//             name="projectTitle"
//             variant="outlined"
//             required
//             value={project.projectTitle}
//             onChange={(event) => handleProjectChange(event, index)}
//           />

//           <TextField
//             label="Skills"
//             name="skillsUsed"
//             variant="outlined"
//             required
//             value={project.skillsUsed}
//             onChange={(event) => handleProjectChange(event, index)}
//           />
//           <TextField
//             label="Start Date"
//             name="startDate"
//             type="date"
//             variant="outlined"
//             required
//             value={project.startDate}
//             onChange={(event) => handleProjectChange(event, index)}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <TextField
//             label="End Date"
//             name="endDate"
//             type="date"
//             variant="outlined"
//             required
//             value={project.endDate}
//             onChange={(event) => handleProjectChange(event, index)}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <TextField
//             label="URL"
//             name="Url"
//             variant="outlined"
//             required
//             value={project.Url}
//             onChange={(event) => handleProjectChange(event,index )}
//           />
//           <TextField
//             label="Organization Name"
//             name="organizationName"
//             type="text"
//             variant="outlined"
//             required
//             value={project.organizationName}
//             onChange={(event) => handleProjectChange(event,index)}
//           />
//           <TextField
//             label="Description"
//             name="description"
//             value={project.description}
//             variant="outlined"
//             required
//             fullWidth
//             multiline
//             maxRows={2}
//             defaultValue="Text limit 250 characters"
//             // color="success"
//             focused
//             onChange={(event) => handleProjectChange(event,index)}
//           />
//           {index === projectData?.length - 1 &&
//             <Button
//               className={classes.addButton}
//               variant="contained"
//               color="primary"
//               startIcon={<Add />}
//               onClick={handleAddProject}
//             >
//               Add
//             </Button>
//           }
//           {index !== projectData?.length - 1 &&
//             <Button
//               className={classes.removeButton}
//               variant="contained"
//               color="primary"
//               startIcon={<Remove />}
//               onClick={() => handleRemoveProject(index)}
//             >
//               Remove
//             </Button>
//           }
//         </div>
//       ))}
//       <Button onClick={handleSubmit}
//         type="submit"
//         variant="contained"
//         color="primary"
//         >
//         Submit

//       </Button>
//       <br></br>
//     </form>
//   );
// }

// export default ProjectForm;



// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import { Button, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';


// const theme = createTheme();

// const useStyles = styled('div')(({ theme }) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       paddingTop: theme.spacing(1),
//       paddingLeft: theme.spacing(1),
//       paddingBottom: theme.spacing(3),
//       [theme.breakpoints.down('sm')]: {
//       },
//       width: '70ch',
//     },
//     color: theme.palette.primary.main,
//     background: '#8ec9ff',
//     boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//     padding: '50px 30px',
//     margin: "0px,500px"
//   },
//   addButton: {
//     margin: theme.spacing(5),
//   },
//   removeButton: {
//     margin: theme.spacing(5),
//   },
// }));

// function ProjectForm() {
//   const classes = useStyles();
//   const [projectData, setProjectData] = useState([
//     {
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: ''
//     }
//   ]);

//   const handleAddProject = () => {
//     const projects = [
//       ...projectData,
//       {
//         projectTitle: '',
//         description: '',
//         skillsUsed: '',
//         startDate: '',
//         endDate: '',
//         Url: '',
//         organizationName: ''
//       }
//     ];
//     setProjectData(projects);
//   };

//   const handleRemoveProject = (index) => {
//     const projects = [...projectData];
//     projects.splice(index, 1);
//     setProjectData(projects);
//   };

//   const handleProjectChange = (event, index) => {
//     const { name, value } = event.target;
//     const projects = [...projectData];
//     projects[index] = {
//       ...projectData[index],
//       [name]: value
//     };
//     setProjectData(projects);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(projectData);
//     // Perform your save operation here
//     // ...
//     alert('Profile submitted successfully');
//   };

//   return (

//     <form className={classes.root} onSubmit={handleSubmit}>
//       <Typography textAlign="center" variant="h6" gutterBottom>
//         Projects:
//       </Typography>
//       {projectData?.map((project, index) => (
//         <div key={index}>
//           <TextField
//             label="Project Title"
//             name="projectTitle"
//             variant="outlined"
//             required
//             value={project.projectTitle}
//             onChange={(event) => handleProjectChange(event, index)}
//           />

//           <TextField
//             label="Skills"
//             name="skillsUsed"
//             variant="outlined"
//             required
//             value={project.skillsUsed}
//             onChange={(event) => handleProjectChange(event, index)}
//           />

//           {/* Other fields */}
//           {/* ... */}

//           {index === projectData?.length - 1 ? (
//             <Button
//               className={classes.addButton}
//               variant="contained"
//               color="primary"
//               startIcon={<AddIcon />}
//               onClick={handleAddProject}
//             >
//               Add
//             </Button>
//           ) : (
//             <Button
//               className={classes.removeButton}
//               variant="contained"
//               color="primary"
//               startIcon={<RemoveIcon />}
//               onClick={() => handleRemoveProject(index)}
//               >
//               Remove
//               </Button>
//               )}
//               </div>
//               ))}
//               <Button
//                    type="submit"
//                    variant="contained"
//                    color="primary"
//                  >
//               Submit
//               </Button>
//               </form>
//               );
//               }

//               export default ProjectForm;


// try 2


// try3

// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import { Button, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const theme = createTheme();

// const useStyles = styled('div')(({ theme }) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       paddingTop: theme.spacing(1),
//       paddingLeft: theme.spacing(1),
//       paddingBottom: theme.spacing(3),
//       [theme.breakpoints.down('sm')]: {},
//       width: '70ch',
//     },
//     color: theme.palette.primary.main,
//     background: '#8ec9ff',
//     boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//     padding: '50px 30px',
//     margin: '0px 500px', // Fixed the syntax error here
//   },
//   addButton: {
//     margin: theme.spacing(5),
//   },
//   removeButton: {
//     margin: theme.spacing(5),
//   },
// }));

// function ProjectForm(props) {
//   const classes = useStyles();
//   const [projectData, setProjectData] = useState([
//     {
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: '',
//     },
//   ]);

//   const handleAddProject = () => {
//     const projects = [
//       ...projectData,
//       {
//         projectTitle: '',
//         description: '',
//         skillsUsed: '',
//         startDate: '',
//         endDate: '',
//         Url: '',
//         organizationName: '',
//       },
//     ];
//     setProjectData(projects);
//   };

//   const handleRemoveProject = (index) => {
//     const projects = [...projectData];
//     projects.splice(index, 1);
//     setProjectData(projects);
//   };

//   const handleProjectChange = (event, index) => {
//     const { name, value } = event.target;
//     const projects = [...projectData];
//     projects[index] = {
//       ...projectData[index],
//       [name]: value,
//     };
//     setProjectData(projects);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(projectData);
//     // Perform your save operation here
//     // ...
//     alert('Profile submitted successfully');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <form className={classes.root} onSubmit={handleSubmit}>
//         <Typography textAlign="center" variant="h6" gutterBottom>
//           Projects:
//         </Typography>
//         {projectData?.map((project, index) => (
//           <div key={index}>
//             <TextField
//               label="Project Title"
//               name="projectTitle"
//               variant="outlined"
//               required
//               value={project.projectTitle}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             <TextField
//               label="Skills"
//               name="skillsUsed"
//               variant="outlined"
//               required
//               value={project.skillsUsed}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

// <TextField
//              label="Start Date"
//             name="startDate"
//              type="date"
//              variant="outlined"
//              required
//              value={project.startDate}
//              onChange={(event) => handleProjectChange(event, index)}
//              InputLabelProps={{
//                shrink: true,
//              }}
//           />
//            <TextField
//              label="End Date"
//              name="endDate"
//              type="date"
//              variant="outlined"
//              required
//              value={project.endDate}
//              onChange={(event) => handleProjectChange(event, index)}
//             InputLabelProps={{
//               shrink: true,
//              }}
//            />
//            <TextField
//              label="URL"
//              name="Url"
//              variant="outlined"
//              required
//              value={project.Url}
//              onChange={(event) => handleProjectChange(event,index )}
//            />
//            <TextField
//              label="Organization Name"
//              name="organizationName"
//              type="text"
//             variant="outlined"
//              required
//              value={project.organizationName}
//             onChange={(event) => handleProjectChange(event,index)}
//            />
//           <TextField
//              label="Description"
//              name="description"
//              value={project.description}
//              variant="outlined"
//              required
//              fullWidth
//             multiline
//             maxRows={2}
//              defaultValue="Text limit 250 characters"
//              // color="success"
//              focused
//              onChange={(event) => handleProjectChange(event,index)}
//            />
//             {index === projectData?.length - 1 ? (
//               <Button
//                 className={classes.addButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<AddIcon />}
//                 onClick={handleAddProject}
//                 >
//                 Add
//                 </Button>
//                 ) : (
//                 <Button
//                 className={classes.removeButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<RemoveIcon />}
//                 onClick={() => handleRemoveProject(index)}
//                 >
//                 Remove
//                 </Button>
//                 )}
//                 </div>
//                 ))}
//                 <Button type="submit" variant="contained" color="primary">
//                 Submit
//                 </Button>
//                 </form>
//                 </ThemeProvider>
//                 );
//                 }

//                 export default ProjectForm;


// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import { Button, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const theme = createTheme();

// const useStyles = styled('div')(({ theme }) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       paddingTop: theme.spacing(1),
//       paddingLeft: theme.spacing(1),
//       paddingBottom: theme.spacing(3),
//       [theme.breakpoints.down('sm')]: {},
//       width: '70ch',
//     },
//     color: theme.palette.primary.main,
//     background: '#8ec9ff',
//     boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//     padding: '50px 30px',
//     margin: '0px 500px',
//   },
//   addButton: {
//     margin: theme.spacing(5),
//   },
//   removeButton: {
//     margin: theme.spacing(5),
//   },
// }));

// function ProjectForm() {
//   const classes = useStyles();
//   const [projectData, setProjectData] = useState([
//     {
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: '',
//     },
//   ]);

//   const handleAddProject = () => {
//     const projects = [
//       ...projectData,
//       {
//         projectTitle: '',
//         description: '',
//         skillsUsed: '',
//         startDate: '',
//         endDate: '',
//         Url: '',
//         organizationName: '',
//       },
//     ];
//     setProjectData(projects);
//   };

//   const handleRemoveProject = (index) => {
//     const projects = [...projectData];
//     projects.splice(index, 1);
//     setProjectData(projects);
//   };

//   const handleProjectChange = (event, index) => {
//     const { name, value } = event.target;
//     const projects = [...projectData];
//     projects[index] = {
//       ...projectData[index],
//       [name]: value,
//     };
//     setProjectData(projects);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(projectData);
//     // Perform your save operation here
//     // ...
//     alert('Profile submitted successfully');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <form className={classes.root} onSubmit={handleSubmit}>
//         <Typography textAlign="center" variant="h6" gutterBottom>
//           Projects:
//         </Typography>
//         {projectData?.map((project, index) => (
//           <div key={index}>
//             <TextField
//               label="Project Title"
//               name="projectTitle"
//               variant="outlined"
//               required
//               value={project.projectTitle}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             <TextField
//               label="Skills"
//               name="skillsUsed"
//               variant="outlined"
//               required
//               value={project.skillsUsed}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             <TextField
//               label="Start Date"
//               name="startDate"
//               type="date"
//               variant="outlined"
//               required
//               value={project.startDate}
//               onChange={(event) => handleProjectChange(event, index)}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />

//             <TextField
//               label="End Date"
//               name="endDate"
//               type="date"
//               variant="outlined"
//               required
//               value={project.endDate}
//               onChange={(event) => handleProjectChange(event, index)}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />

//             <TextField
//               label="URL"
//               name="Url"
//               variant="outlined"
//               required
//               value={project.Url}
//               onChange={(event) => handleProjectChange(event, index)}
//             />
//             <TextField
//               label="Organization Name"
//               name="organizationName"
//               type="text"
//               variant="outlined"
//               required
//               value={project.organizationName}
//               onChange={(event) => handleProjectChange(event, index)}
//             />
//             <TextField
//               label="Description"
//               name="description"
//               value={project.description}
//               variant="outlined"
//               required
//               fullWidth
//               multiline
//               maxRows={2}
//               defaultValue="Text limit 250 characters"
//               // color="success"
//               focused
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             {index === projectData?.length - 1 ? (
//               <Button
//                 className={classes.addButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<AddIcon />}
//                 onClick={handleAddProject}
//               >
//                 Add
//               </Button>
//             ) : (
//               <Button
//                 className={classes.removeButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<RemoveIcon />}
//                 onClick={() => handleRemoveProject(index)}
//               >
//                 Remove
//               </Button>
//             )}
//           </div>
//         ))}
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </ThemeProvider>
//   );
// }

// export default ProjectForm; 
//  trial 5


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/system';
// import { Button, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const theme = createTheme();

// const StyledForm = styled('form')(({ theme }) => ({
//   '& .MuiTextField-root': {
//     margin: theme.spacing(2),
//     paddingTop: theme.spacing(1),
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(3),
//     [theme.breakpoints.down('sm')]: {},
//     width: '70ch',
//   },
//   addButton: {
//     margin: '40px 0',
//   },
//   removeButton: {
//     margin: '40px 0',
//   },
// }));

// const ProjectForm = (props) => {
//   const [projectData, setProjectData] = useState([
//     {
//       projectTitle: '',
//       description: '',
//       skillsUsed: '',
//       startDate: '',
//       endDate: '',
//       Url: '',
//       organizationName: '',
//     },
//   ]);

//   const handleAddProject = () => {
//     const projects = [
//       ...projectData,
//       {
//         projectTitle: '',
//         description: '',
//         skillsUsed: '',
//         startDate: '',
//         endDate: '',
//         Url: '',
//         organizationName: '',
//       },
//     ];
//     setProjectData(projects);
//   };

//   const handleRemoveProject = (index) => {
//     const projects = [...projectData];
//     projects.splice(index, 1);
//     setProjectData(projects);
//   };

//   const handleProjectChange = (event, index) => {
//     const { name, value } = event.target;
//     const projects = [...projectData];
//     projects[index] = {
//       ...projectData[index],
//       [name]: value,
//     };
//     setProjectData(projects);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(projectData);
//     // Perform your save operation here
//     // ...
//     alert('Profile submitted successfully');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <StyledForm onSubmit={handleSubmit}>
//         <Typography textAlign="center" variant="h6" gutterBottom>
//           Projects:
//         </Typography>
//         {projectData?.map((project, index) => (
//           <div key={index}>
//             <TextField
//               label="Project Title"
//               name="projectTitle"
//               variant="outlined"
//               required
//               value={project.projectTitle}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             <TextField
//               label="Skills"
//               name="skillsUsed"
//               variant="outlined"
//               required
//               value={project.skillsUsed}
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             <TextField
//               label="Start Date"
//               name="startDate"
//               type="date"
//               variant="outlined"
//               required
//               value={project.startDate}
//               onChange={(event) => handleProjectChange(event, index)}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />

//             <TextField
//               label="End Date"
//               name="endDate"
//               type="date"
//               variant="outlined"
//               required
//               value={project.endDate}
//               onChange={(event) => handleProjectChange(event, index)}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />

//             <TextField
//               label="URL"
//               name="Url"
//               variant="outlined"
//               required
//               value={project.Url}
//               onChange={(event) => handleProjectChange(event, index)}
//             />
//             <TextField
//               label="Organization Name"
//               name="organizationName"
//               type="text"
//               variant="outlined"
//               required
//               value={project.organizationName}
//               onChange={(event) => handleProjectChange(event, index)}
//             />
//             <TextField
//               label="Description"
//               name="description"
//               value={project.description}
//               variant="outlined"
//               required
//               fullWidth
//               multiline
//               maxRows={2}
//               defaultValue="Text limit 250 characters"
//               // color="success"
//               focused
//               onChange={(event) => handleProjectChange(event, index)}
//             />

//             {index === projectData?.length - 1 ? (
//               <Button
//                 style={StyledForm.addButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<AddIcon />}
//                 onClick={handleAddProject}
//               >
//                 Add
//               </Button>
//             ) : (
//               <Button
//                 style={StyledForm.removeButton}
//                 variant="contained"
//                 color="primary"
//                 startIcon={<RemoveIcon />}
//                 onClick={() => handleRemoveProject(index)}
//               >
//                 Remove
//               </Button>
//             )}
//           </div>
//         ))}
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </StyledForm>
//     </ThemeProvider>
//   );
// };

// export default ProjectForm;
// try 6


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const theme = createTheme();



const StyledForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {},
    width: '70ch',
  },
  addButton: {
    margin: '40px 0',
  },
  removeButton: {
    
    color: theme.palette.primary.main,
    background: '#8ec9ff',
    boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '50px 30px',
    margin: '0px 500px',
  },
}));


const userId = JSON.parse(localStorage.getItem('userDetails'));
const ProjectForm = (props) => {
  const [projectData, setProjectData] = useState([
    {
      userDetailsID: userId._id,
      projectTitle: '',
      description: '',
      skills: '',
      startDate: '',
      endDate: '',
      Url: '',
      organizationName: '',
    },
  ]);

  const handleAddProject = () => {
    const projects = [
      ...projectData,
      {
        userDetailsID: userId._id,
        projectTitle: '',
        description: '',
        skills: '',
        startDate: '',
        endDate: '',
        Url: '',
        organizationName: '',
      },
    ];
    setProjectData(projects);
  };

  const handleRemoveProject = (index) => {
    const projects = [...projectData];
    projects.splice(index, 1);
    setProjectData(projects);
  };

  const handleProjectChange = (event, index) => {
    const { name, value } = event.target;
    const projects = [...projectData];
    projects[index] = {
      ...projectData[index],
      [name]: value,
    };
    setProjectData(projects);
  };

    function SaveProject() {
    console.log(projectData)
    let projectInfo = projectData;
    projectInfo?.map((e, index) => {
     return  fetch("http://localhost:8000/project", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e)

      }).then(response => response.json().then(data => {
        console.log(data)
        if (data.status === false) return false
        else{

          setProjectData( [{
            userDetailsID: userId._id,
            projectTitle: '',
            description: '',
            skillsUsed: '',
            startDate: '',
            endDate: '',
            Url: '',
            organizationName: ''
          }])

        }
      }
      ))
    })
    return true
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(projectData);
    SaveProject()
    alert('Profile submitted successfully');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledForm onSubmit={handleSubmit}>
        <Typography textAlign="center" variant="h6" gutterBottom>
          Projects:
        </Typography>
        {projectData?.map((project, index) => (
          <div key={index}>
            <TextField
              label="Project Title"
              name="projectTitle"
              variant="outlined"
              required
              value={project.projectTitle}
              onChange={(event) => handleProjectChange(event, index)}
            />

            <TextField
              label="Skills"
              name="skills"
              variant="outlined"
              required
              value={project.skills}
              onChange={(event) => handleProjectChange(event, index)}
            />

            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              variant="outlined"
              required
              value={project.startDate}
              onChange={(event) => handleProjectChange(event, index)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="End Date"
              name="endDate"
              type="date"
              variant="outlined"
              required
              value={project.endDate}
              onChange={(event) => handleProjectChange(event, index)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="URL"
              name="Url"
              variant="outlined"
              required
              value={project.Url}
              onChange={(event) => handleProjectChange(event, index)}
            />
            <TextField
              label="Organization Name"
              name="organizationName"
              type="text"
              variant="outlined"
              required
              value={project.organizationName}
              onChange={(event) => handleProjectChange(event, index)}
            />
            <TextField
              label="Description"
              name="description"
              value={project.description}
              variant="outlined"
              required
              fullWidth
              multiline
              maxRows={2}
              defaultValue="Text limit 250 characters"
              // color="success"
              focused
              onChange={(event) => handleProjectChange(event, index)}
            />

            {index === projectData?.length - 1 ? (
              <Button
                className={StyledForm.addButton}
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddProject}
              >
                Add
              </Button>
            ) : (
              <Button
                className={StyledForm.removeButton}
                variant="contained"
                color="primary"
                startIcon={<RemoveIcon />}
                onClick={() => handleRemoveProject(index)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
}

export default ProjectForm;


