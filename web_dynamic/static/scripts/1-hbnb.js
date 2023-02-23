// Wait for DOM to be ready
$(document).ready(function () {
  // Dictionary to store the checked amenities
  const amenities = {};

  // Listen for changes on the input checkboxes
  $('input[type=checkbox]').change(function () {
    // Get the Amenity ID and name from the data attributes of the input tag
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    // If the checkbox is checked, add the Amenity ID to the dictionary
    if ($(this).is(':checked')) {
      amenities[amenityId] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the dictionary
      delete amenities[amenityId];
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    const amenityList = Object.values(amenities).join(', ');
    $('.amenities h4').text(amenityList);
  });
});
