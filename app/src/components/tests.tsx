import * as React from 'react';
import {
    List, Datagrid, TextField, Edit,
    Create, SimpleForm, DisabledInput, 
    EditButton, SelectField, TextInput, SelectInput,
    Filter,
    required,
    LongTextInput
} from 'admin-on-rest';
import { ReactType } from 'react';

const TodoFilter = (props: {}) => (
    <Filter {...props}>
        <TextInput label="Search" source="question" alwaysOn={true} />
    </Filter>
);

export const TestList = (props: {}) => (
    <List
        filters={<TodoFilter />}
        {...props}
    >
        <Datagrid>
            <TextField source="id" />
            <AnswerTypeField source="answer_type"  />
            <TextField source="question"  />
            <EditButton basePath="/posts" />
        </Datagrid>
    </List>
);

const answerTypeChoices = [
    { id: 'resource', name: 'Resource' }
];

const AnswerTypeField = (props: {source: string}) => (
    <SelectField 
        choices={answerTypeChoices} 
        {...props}
    />
);

const AnswerTypeInput: ReactType = (props: {source: string}) => (
    <SelectInput 
        choices={answerTypeChoices}
        isRequired={true}
        allowEmpty={false}
        {...props}
    />
);
AnswerTypeInput.defaultProps = {
    addField: true,
    allowEmpty: false,
    isRequired: true
};

const TestTitle = ({ record }: { record?: {id: string} }) => {
    return <span>Test {record && record.id}</span>;
};

export const TestEdit = (props: {}) => (
    <Edit title={<TestTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <AnswerTypeInput source="answer_type" />
            <TextInput source="question" validate={[required]} />
            <LongTextInput source="query" validate={[required]} />
            <LongTextInput 
                source="answer"
                validate={[required]}
                format={JSON.stringify}
                parse={JSON.parse}
            />
        </SimpleForm>
    </Edit>
);

export const TestCreate = (props: {}) => (
    <Create title="Create a test" {...props}>
        <SimpleForm>
            <TextInput source="id" validate={[required]} />
            <AnswerTypeInput source="answer_type" />
            <TextInput source="question" validate={[required]} />
            <LongTextInput source="query" validate={[required]} />
            <LongTextInput 
                source="answer"
                validate={[required]}
                format={JSON.stringify}
                parse={JSON.parse}
            />
        </SimpleForm>
    </Create>
);
