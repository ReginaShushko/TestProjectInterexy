import $api from "../api";

export const getCharacter = async () => {
  const { data } = await $api.get("character/");
  return data;
};

export const getSingleCharacter = async (id: any) => {
  const { data } = await $api.get("character/" + id);
  return data;
};

export const getCharacterByName = async (text: string) => {
  try {
    const result = await $api.get(`character/?name=${text}`);
    return result.data.results;
  } catch (error) {
    return [];
  }
};