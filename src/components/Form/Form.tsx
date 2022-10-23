import './Form.css';
import { TextInput, Button, Group, Select } from '@mantine/core';
import { useForm, } from '@mantine/form';
import { Task } from '../Main/Main';

type FormProps = {
  handleForm: (values: Task) => void;
}

const severityValues = ["Relaxed", "Important", "!Urgent!"]

function Form({handleForm}: FormProps) {
  const form = useForm({
    initialValues: {
      content: '',
      severity: 'Relaxed',
    }
  });

  return (
    <div className="Form">
      <form onSubmit={form.onSubmit((values) => {
        //sanity, please!
        const parsed: Task = {
          content: values.content,
          severity: severityValues.indexOf(values.severity) + 1 as 1|2|3,
        }
        form.reset()
        handleForm(parsed)
      })}>
        <TextInput
          required
          withAsterisk
          label="Your Task"
          placeholder="Do the dishes!"
          {...form.getInputProps('content')}
        />
        <Select
          style={{ marginTop: 20, zIndex: 2 }}
          defaultValue="Relaxed"
          data={severityValues}
          placeholder="Pick one"
          {...form.getInputProps('severity')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default Form;
