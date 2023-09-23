import { Helmet } from "react-helmet";

export const AddVenue = () => {
  return (
    <div>
      <Helmet>
        <title>Add Venue</title>
        <meta name="description" content="Upload your own venue for other travelers" />
      </Helmet>
      <h1>Add Venue</h1>
    </div>
  );
}