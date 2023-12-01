import {
  adoptPet,
  returnPet,
  savePet,
  unsavePet,
} from "@/repository/pet_ownership/pet_ownersip_repository";

export async function handleAdopt(petID, token) {
  if (!token) {
    alert("You need to login first");
    return;
  }

  const response = await adoptPet(petID, token);
  if (response.status === 200) {
    alert("Pet adopted successfully");
  } else if (response.status === 401) {
    alert("You need to login first");
  } else {
    alert("Something went wrong");
  }
}

export async function returnPetHandler(petID, token) {
  const response = await returnPet(petID, token);
  if (response.status === 200) {
    window.location.reload();
  }
  if (response.status === 400) {
    alert("Bad request");
  }
  if (response.status === 401) {
    alert("Unauthorized");
  }
  if (response.status === 404) {
    alert("Not found");
  }
}

export async function handleSaveForLater(petID, token) {
  if (!token) {
    alert("You need to login first");
    return;
  }

  const response = await savePet(petID, token);
  if (response.status === 200) {
    alert("Saved");
  } else if (response.status === 401) {
    alert("You need to login first");
  } else {
    alert("Something went wrong");
  }
}

export async function handleUnsave(petID, token) {
  if (!token) {
    alert("You need to login first");
    return;
  }

  const response = await unsavePet(petID, token);
  if (response.status === 200) {
    alert("Unsaved");
  } else if (response.status === 401) {
    alert("You need to login first");
  } else {
    alert("Something went wrong");
  }
}
