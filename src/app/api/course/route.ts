import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export async function GET(request: Request) {
  const courseDir = join(process.cwd(), "src/course");
  const files = readdirSync(courseDir).filter((file) => file.endsWith(".json"));

  const courseList = files.map((file) => {
    const name = file.replace(".json", "");
    const filePath = join(courseDir, file);
    const content = JSON.parse(readFileSync(filePath, "utf-8"));

    return {
      name,
      content,
    };
  });

  return new Response(JSON.stringify(courseList));
}
