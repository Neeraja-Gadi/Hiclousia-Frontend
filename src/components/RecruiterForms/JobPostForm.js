
// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button, Typography, TextField } from '@material-ui/core';
// import { Add, Remove } from '@material-ui/icons';
// import {  primarySkills, secondarySkills } from '../../constraints/arrays';
// import { Box } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
// import MultipleSelectChip from '../multiForm/MultiSelect';



// const useStyles = makeStyles((theme) => ({
//     root: { 
//         '& .MuiTextField-root': {
//             margin: theme.spacing(2),
//             paddingTop: theme.spacing(1),
//             paddingLeft: theme.spacing(1),
//             paddingBottom: theme.spacing(3),
//             [theme.breakpoints.down('sm')]: {
//                 //  backgroundColor: theme.palette.info.main 
//             },
//             width: '70ch',
//         },
       
//         color: theme.palette.primary.main,
//         background: '#8ec9ff',
//         boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//         padding: '50px 30px',
//         margin: "0px,500px"
//     },
 
//     addButton: {
//         margin: theme.spacing(5),

//     },
//     removeButton: {
//         margin: theme.spacing(5),

//     },
//     formControl: {
//         width: '100%',
//         marginBottom: theme.spacing(2),
//         marginRight: theme.spacing(3),
//         // paddingBottom: theme.spacing(3)

//     },
// }));

// const userId = JSON.parse(localStorage.getItem("userDetails"))

// const JobForm = () => {
//     const navigation = useNavigate();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     useEffect(() => {
        
//         if (userId == null) {navigation("/login")
//         alert("Please login first")
// }
//     }, [navigation])
//     const classes = useStyles();
//     const [jobData, setJobData] = useState([
//         {
//             userDetailsID: userId?userId._id:null,
//             jobRole: "",
//             jobDescription: "",
//             experience: "",
//             primarySkills: "",
//             secondarySkills: "",
//             education: [],
//             location: "",
//             salary: "",
//         },
//     ]);

//     const handleAddJob = () => {
//         setJobData([
//             ...jobData,
//             {
//                 userDetailsID: userId._id,
//                 jobRole: "",
//                 jobDescription: "",
//                 experience: "",
//                 primarySkills: "",
//                 secondarySkills: "",
//                 education: [],
//                 location: "",
//                 salary: "",
//             },
//         ]);
//     };

//     const handleRemoveJob = (index) => {
//         const newJobs = [...jobData];
//         newJobs.splice(index-1, 1);
//         setJobData(newJobs);
//     };

//     const handleJobChange = (event, index) => {
//         const { name, value } = event.target;
//         const newJobs = [...jobData];
//         newJobs[index] = {
//             ...newJobs[index],
//             [name]: value,
//         };
//         setJobData(newJobs);
//     };

//     const handleJobChange2 = (event, index) => {
//         const {name, value} = event.target;
//         const [field] = name.split(".");
//         handleJobChange(index, field, value);
//       };

//     function SaveJob() {
//           let info = {...jobData}
    
//             fetch("http://localhost:8000/job", {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(info)

//             }).then(response => response.json().then(data => {
//                 console.log(data)
//                 if(data.status===true){
//                     alert("Created Job Post Sucessfully")
//                     // navigate("/RecruiterSearch")
//                 }

//             }))
        

//     }
//     function handlesubmitEvent(e) {
//         // if (!jobData.jobRole || !jobData.jobDescription || !jobData.experience || !jobData.secondarySkills || !jobData.primarySkills || !jobData.education) alert("Please fill all the fields'")
//         // else {
//         // console.log(jobData)
//         e.preventDefault()
//         SaveJob()
//         // }
//     };

//     return (
//         <form className={classes.root} onSubmit={handlesubmitEvent}>
//             <Typography textAlign="center" variant="h6" gutterBottom>
//                 Post a job :
//             </Typography>
//             {jobData?.map((job, index) => (
//                 <div key={index}>
//                     <TextField
//                         label="Job Role"
//                         name="jobRole"
//                         value={job.jobRole}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         size="Normal"
//                         required
//                     />

//                     <TextField
//                         label="Job Description"
//                         name="jobDescription"
//                         value={job.jobDescription}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         label="Experience"
//                         name="experience"
//                         value={job.experience}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <MultipleSelectChip handleFunction={handleJobChange} index={index} requiredData={primarySkills} labelName={"Primary Skills"} />
                    
//                     {/* <TextField

//                         label="Primary Skills"
//                         name="primarySkills"
//                         value={job.primarySkills}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     /> */}
//                     {/* <TextField
//                         label="Secondary Skills"
//                         name="secondarySkills"
//                         value={job.secondarySkills}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     /> */}
//                     <MultipleSelectChip handleFunction={handleJobChange} index={index}  requiredData={secondarySkills} labelName={"Secondary Skills"}/>
//                     <Typography variant="h6" gutterBottom>
//                         Education Qualification
//                     </Typography>
//                     <Box className={classes.formControl}>
//                         {jobData.education?.map((education, index) => (
//                             <Box key={index}>
//                                 <TextField
//                                     label="Authority"
//                                     name={`education[${index}]`}
//                                     value={education.authority}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                                 <TextField
//                                     label="education Level"
//                                     name={`education[${index}]`}
//                                     value={education.educationLevel}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                                 <TextField
//                                     label="Discipline"
//                                     name={`education[${index}]`}
//                                     value={education.discipline}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                             </Box>

//                         ))}
//                     </Box>
//                     <Button
//                         variant="outlined"
//                         onClick={() =>
//                             setJobData({
//                                 ...jobData,
//                                 education: [
//                                     ...jobData.education,
//                                     { authority: '', educationLevel: '', discipline: '' }
//                                 ]
//                             })
//                         }
//                     >
//                         Add Education Qualifications
//                     </Button>
//                     <TextField
//                         label="Job Location"
//                         name="location"
//                         value={job.location}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         label="Salary"
//                         name="salary"
//                         value={job.salary}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />

//                     {index === jobData?.length - 1 &&
//                         <Button
//                             className={classes.addButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Add />}
//                             onClick={handleAddJob}
//                         >
//                             Add
//                         </Button>
//                     }
//                     {index !== jobData?.length - 1 &&
//                         <Button
//                             className={classes.removeButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Remove />}
//                             onClick={() => handleRemoveJob(index)}
//                         >
//                             Remove
//                         </Button>
//                     }
//                 </div>
//             ))}
//             <Button onClick={handlesubmitEvent}
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//             >
//                 Submit

//             </Button>
//             <br></br>
//         </form>
//     );

// };

// export default JobForm;