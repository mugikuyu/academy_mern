import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCategory,
  newCategory,
  saveAttributeToCatDoc,
} from '../../redux/actions/categoryActions';
import CreateProductPageComponent from './components/CreateProductPageComponent';
import {
  uploadImagesApiRequest,
  uploadImagesCloudinaryApiRequest,
} from './utils/utils';

const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post(`/api/products/admin`, { ...formInputs });
  return data;
};

const AdminCreateProductPage = () => {
  const { categories } = useSelector((state) => state.getCategories);
  const dispatch = useDispatch();

  return (
    <CreateProductPageComponent
      createProductApiRequest={createProductApiRequest}
      uploadImagesApiRequest={uploadImagesApiRequest}
      uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest}
      categories={categories}
      reduxDispatch={dispatch}
      newCategory={newCategory}
      deleteCategory={deleteCategory}
      saveAttributeToCatDoc={saveAttributeToCatDoc}
    />
  );
};

export default AdminCreateProductPage;
