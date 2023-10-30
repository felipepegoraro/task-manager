import { DB_TODO, TsetStateFn } from './types';

const serialize = (e: DB_TODO): string => JSON.stringify(e);
const deserialize = (e: string): DB_TODO => JSON.parse(e) as DB_TODO;

export const handleSerializeClick = (data: DB_TODO) => {
  const serialized_data = serialize(data);
  const blob = new Blob([serialized_data], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const toclick = document.createElement("a");
  toclick.href = url;
  toclick.download = "data.json";
  toclick.click();
  URL.revokeObjectURL(url);
}

export const handleDeserializeData = (setData: TsetStateFn<DB_TODO>) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          if (e.target?.result) {
            const json_data = deserialize(e.target.result.toString());
            console.log(json_data);
            setData((prev) => [...prev, ...json_data]);
          }
        } catch (error) {
          console.error("Erro ao analisar o arquivo JSON: ", error);
        }
      };
      reader.readAsText(file);
    }
  });
  input.click();
};
