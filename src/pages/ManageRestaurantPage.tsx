import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantAPI";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
    const {createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isLoading: isUpdateLoading} = useUpdateMyRestaurant();

    const isEditing = !!restaurant;

    return( <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant:createRestaurant} isLoading={isUpdateLoading || isCreateLoading}/>);
};