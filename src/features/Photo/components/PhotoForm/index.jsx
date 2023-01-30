import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup'

import {Button, FormGroup} from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form, FastField } from 'formik';

import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

PhotoForm.propTypes = {
    onsubmit: PropTypes.func
};
PhotoForm.defaultProps = {
    onsubmit: null
}

function PhotoForm(props) {
    const {initialValues} = props
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required(),
        photo: Yup.string().required('This field is required'),
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit = {props.onSubmit}
        >
            {formikProps => {
            const {values, errors, touched} = formikProps
            console.log({values, errors, touched})
            return(
            <Form>
            <FastField
                name='title'
                component={InputField}

                label='Title'
                placeholder='Eg: Wow'
            />
            {/* <FormGroup>
              <Label for='titleId'>Title</Label>
              <Input name='title' id='titleId' placeholder='Eg: Wow' />
            </FormGroup> */}
            <FastField
              name="categoryId"
              component={SelectField}

              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            {/* <FormGroup>
              <Label for='categoryId'>Category</Label>
              <Select 
                id='categoryId'
                name='categoryId'
                placeholder='What is your photo category'
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup> */}
            <FastField
                name='photo'
                component={RandomPhotoField}
                label='Photo'
            />
            {/* <FormGroup>
                <Label for='categoryId'>Photo</Label>
                <div><Button type='button' outline color='primary'>Random a Photo</Button></div>
                <div>
                    <img width='200px' height='200px' src={Images.COLORFUL_BG} alt='colorful background' />
                </div>
            </FormGroup> */}
            <FormGroup>
                <Button type='submit'color='primary'>Add to Album</Button>
            </FormGroup>
        </Form>
            )

            }}
        </Formik>
    );
}

export default PhotoForm;

