import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, label, control, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label ? <label>{label}</label> : null}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
             apiKey='t3gotrpkgga98y66hiq8hlphf16dbeddx76a9gbz5s9xfl2p'
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              menubar: true,
              height: 500,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],

              toolbar:   "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",

              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}

            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
