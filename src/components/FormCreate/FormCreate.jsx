import BaseForm from '../BaseForm/BaseForm'
import './FormCreate.css'

function FormCreate(props) {
  return (
    <div className='container_Form_Create'>
        <BaseForm
        id='create_name'
        label='Name'
        type='text'
        onChange={props.onChange}
        name='name'
        value={props.name_value}/>
         <BaseForm
        id='create_image'
        label='Image'
        type='text'
        onChange={props.onChange}
        name='image'
        value={props.image_value}/>
         <BaseForm
        id='create_description'
        label='Description'
        type='text'
        onChange={props.onChange}
        name='description'
        value={props.description_value}/>
         <BaseForm
        id='create_price'
        label='Price'
        type='text'
        onChange={props.onChange}
        name='price'
        value={props.price_value}/>
        <button type="button" 
                className={props.className}
                onClick={props.onClick}>
                    Create
        </button>
    </div>
  )
}

export default FormCreate