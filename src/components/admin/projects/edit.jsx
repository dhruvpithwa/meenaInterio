
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";

import { Box, Button, Grid, IconButton, InputAdornment, ImageList, ImageListItem, ImageListItemBar, TextField, Typography, useTheme, useMediaQuery, Divider } from "@mui/material";
import { Add as AddIcon, Delete } from "@mui/icons-material";

import { uploadAsset, deleteAsset, updateProject } from "../../../store/projects";

export const EditProject = () => {

    const dispatch = useDispatch();
    const { projects } = useSelector(state => state.projectState);

    const [searchParams] = useSearchParams();
    const projectId = searchParams.get('id');
    const project = projects[projectId];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: project?.name ?? "",
            location: project?.location ?? "",
            description: project?.description ?? { 0: '' },
            assets: project?.assets ?? []
        },
        onSubmit: async (values) => {
            await dispatch(updateProject(projectId, values));
            
            formik.resetForm();
        }
    });

    const onNewLineAddition = () => {
        const description = formik.values.description;

        formik.setFieldValue('description', { ...description, [Object.keys(description).length]: "" });
    }
    const onNewLineDeletion = (key) => {
        const description = formik.values.description;
        let newDescriptionObj = {}, counter = 0;
        Object.keys(description).forEach((descKey) => {
            if(descKey !== key){
                newDescriptionObj[counter++] = description[descKey];
            }
        });

        formik.setFieldValue('description', newDescriptionObj);
    }

    const onUploadAsset = async (event) => {
        const { id, files } = event.target;
        const assetUrl = await dispatch(uploadAsset(files[0]));

        formik.setFieldValue('assets', [...formik.values.assets, { type: id, url: assetUrl }]);
    }

    const onDeleteAsset = async (url) => {
        await dispatch(deleteAsset(url));

        formik.setFieldValue('assets', [...formik.values.assets.filter(item => item.url !== url)])
    }

    const handleDescriptionChange = (event) => {
        const { id, value } = event.target;
        const description = formik.values.description;
        description[id.split('-')[1]] = value;

        formik.setFieldValue('description', description);
    }


    return (

        <>
            <Typography variant="h5">Edit Project</Typography>
            <br></br>
            <Divider />
            <br></br>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box component={"form"} noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} >
                                <TextField
                                    id="name"
                                    name="name"
                                    placeholder="Enter Project Name *"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="location"
                                    name="location"
                                    placeholder="Enter Project Location *"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    sx={{
                                        float: 'right'
                                    }}
                                    onClick={onNewLineAddition}
                                    disabled={Object.keys(formik.values.description).length >= 3}
                                >
                                    <AddIcon /> Add New Line
                                </Button>
                            </Grid>

                            {
                                Object.keys(formik.values.description).map((descriptionKey, index) => {
                                    return (
                                        <Grid item xs={12} key={descriptionKey}>
                                            <TextField
                                                id={`description-${descriptionKey}`}
                                                placeholder={`Enter Project Description Line ${index + 1} ${index === 0 ? '*' : ''}`}
                                                rows={4}
                                                value={formik.values.description[descriptionKey]}
                                                onChange={handleDescriptionChange}
                                                required={index === 0}
                                                multiline
                                                fullWidth
                                                InputProps={index > 0 ?
                                                    {
                                                        endAdornment:
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="remove-line"
                                                                    onClick={() => onNewLineDeletion(descriptionKey)}
                                                                    edge="end"
                                                                >
                                                                    <Delete />
                                                                </IconButton>
                                                            </InputAdornment>
                                                    }
                                                    : {}
                                                }
                                            />
                                        </Grid>
                                    )
                                })
                            }

                            <Grid item xs={12}>
                                <Button
                                    sx={{
                                        float: 'right'
                                    }}
                                    component="label"
                                >
                                    <AddIcon /> Upload Image
                                    <input
                                        id="image"
                                        type="file"
                                        multiple={false}
                                        hidden
                                        accept="image/*"
                                        onChange={onUploadAsset}
                                    />
                                </Button>
                                <Button
                                    sx={{
                                        float: 'right'
                                    }}
                                    component="label"
                                >
                                    <AddIcon /> Upload Video
                                    <input
                                        id="video"
                                        type="file"
                                        multiple={false}
                                        hidden
                                        accept="video/*"
                                        onChange={onUploadAsset}
                                    />
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                {formik.values.assets.length > 0 &&
                                    <ImageList sx={{ height: 300 }} cols={isMobile ? 1 : 4} rowHeight={150}>
                                        {formik.values.assets.map(({ type, url }, index) => (
                                            <ImageListItem key={`${type}-${index}`}>
                                                {type === 'image' ? <img
                                                    style={{ maxHeight: 150 }}
                                                    src={url}
                                                    alt={`${type}-${index}`}
                                                    loading="lazy"
                                                /> :
                                                    <video
                                                        style={{ maxHeight: 150 }}
                                                        alt={`${type}-${index}`}
                                                        loading="lazy"
                                                        muted
                                                        autoPlay
                                                        loop
                                                    >
                                                        <source src={url} />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                }
                                                <ImageListItemBar
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}

                                                            onClick={() => { onDeleteAsset(url) }}
                                                        >
                                                            <Delete />
                                                        </IconButton>
                                                    }
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                }
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth onClick={formik.handleSubmit}>Update</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>

    );
}
