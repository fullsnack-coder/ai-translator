import { Translation } from "../domain/translations";

export const getTranslation = async (
  translation: Translation
): Promise<Omit<Translation, "naturallityLevel">> => {
  const url = new URL("http://localhost:8080/api/v1/translate");

  url.searchParams.append("text", translation.text);
  url.searchParams.append("from", translation.from);
  url.searchParams.append("to", translation.to);
  url.searchParams.append("n", translation.naturallityLevel.toString());

  const translationResponse = await fetch(url.toString(), {
    method: "GET",
  });

  const { text, from, to } = await translationResponse.json();

  return {
    text,
    from,
    to,
  };
};
