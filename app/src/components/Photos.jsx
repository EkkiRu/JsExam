import UNSPLASH from '../api/UNSPLASH';
import React, {useEffect, useState} from 'react';
import { Formik, Form, Field } from 'formik';
import style from './Photos.module.css'

let mass1=[];
let i = 1;
const Photos = (value) => {
    const [photos, setPhotos]  = useState(null);
    let fetchPhotosList = async (value, page) => {
        const { data: { results } } = await UNSPLASH.getPhotosList(value, page);
        mass1 = mass1.concat(results);
        console.log(mass1);
        setPhotos(mass1);
        return mass1;
      };

    return <>
    <Formik
            initialValues={{
                photo: '',
            }}
            onSubmit={(value) => { 
                fetchPhotosList(value.photo,i)
                i++;
                window.addEventListener('scroll', function() {
                    if(document.documentElement.offsetHeight<=document.documentElement.scrollTop)                    
                    fetchPhotosList(value.photo,i)
                    i++;
                });

            }}
            >
            <Form>
                <label htmlFor="photo" style={{color:'white'}}>Название какого то приложения   </label>
                <Field id="photo" className="photo" name="photo" placeholder="Название того чего вы хотите увидеть" style={{width:'50%'}} />
                <button type="submit" >НАЖМИ МЕНЯ</button>
            </Form>
        </Formik>
    {!!photos && photos.map((item) =>{
        return <img src={item.urls.small}></img>
        })}
    </>
}



export default Photos;