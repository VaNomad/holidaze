import { Helmet } from "react-helmet";

export const AddVenueForm = () => {
  return (
    <div>
      <Helmet>
        <title>Holidaze | Add Your Venue</title>
        <meta
          name="description"
          content="Upload your own venue for other travelers"
        />
      </Helmet>
      <h1 className="flex justify-center font-bold text-2xl">Add Venue Form</h1>
    </div>
  );
}