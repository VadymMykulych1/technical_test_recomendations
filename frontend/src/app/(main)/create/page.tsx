'use client';

import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';

interface FormValues {
  userId: string;
  interests: { value: string }[];
}

const CreateInterests = () => {
  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      userId: '',
      interests: [{ value: '' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'interests'
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black">Create Interests</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">User ID:</label>
          <input
            type="text"
            {...register('userId', { required: 'User ID is required' })}
            className="w-full p-2 border rounded text-black"
            placeholder="Enter User ID"
          />
        </div>
        <div>
          <label className="block text-gray-700">Interests:</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`interests.${index}.value`, {
                  required: 'Interest is required'
                })}
                className="flex-1 p-2 border rounded text-black"
                placeholder={`Interest ${index + 1}`}
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="ml-2 text-red-500"
                >
                  -
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ value: '' })}
            className="text-blue-500 mt-2"
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateInterests;
