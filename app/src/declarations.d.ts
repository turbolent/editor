
declare module '@turbolent/aor-postgrest-client';

declare module 'admin-on-rest' {
    function jsonServerRestClient(url: string): Promise<{type: string, resource: string, param: {}}>;

    const AUTH_LOGIN: string;
    const AUTH_CHECK: string;
    const AUTH_LOGOUT: string;
    const AUTH_ERROR: string;

    type AuthClientParams = AuthClientNavigationParams | AuthClientLoginParams | AuthClientErrorParams;

    interface AuthClientNavigationParams {
        resource: string
        route: string
    }

    interface AuthClientLoginParams {
        username: string
        password: string
    }

    interface AuthClientErrorParams {
        status: number
    }

    class Admin extends React.Component<AdminProps, {}> {}
    interface AdminProps {
        restClient: Promise<{type: string, resource: string, param: {}}>
        title?: string
        theme?: any
        authClient?: (type: string, params: AuthClientParams) => Promise<any>
    }

    class Resource extends React.Component<ResourceProps, {}> {}
    interface ResourceProps {
        name: string
        list?: React.ReactType
        edit?: React.ReactType
        create?: React.ReactType
        remove?: React.ReactType
        icon?: React.ReactType
    }

    class Filter extends React.Component {}    

    class List extends React.Component<ListProps, {}> {}
    interface ListProps {
        filters?: React.ReactElement<any>
    }

    class Datagrid extends React.Component {}

    class Edit extends React.Component<EditProps, {}> {}
    interface EditProps {
        title?: string | React.ReactElement<any>
    }

    class Create extends React.Component<CreateProps, {}> {}
    interface CreateProps {
        title?: string | React.ReactElement<any>
    }

    class Delete extends React.Component {}

    abstract class Form extends React.Component<FormProps, {}> {}
    interface FormProps {}

    class SimpleForm extends Form {}

    type Validator = (value: any) => string | undefined

    interface InputProps {
        source: string
        label?: string
        validate?: (Validator)[]
        options?: {}
        alwaysOn?: boolean
        isRequired?: boolean
        allowEmpty?: boolean
        parse?: (value: any) => string
        format?: (value: string) => any
    }

    class TextInput extends React.Component<InputProps, {}> {}
    
    class LongTextInput extends React.Component<InputProps, {}> {}    
    
    class DisabledInput extends React.Component<InputProps, {}> {}
    
    class DateInput extends React.Component<InputProps, {}> {}

    class SelectInput extends React.Component<SelectInputProps, {}> {}
    interface SelectInputProps extends InputProps {
        choices: {}[]
    }

    class EditButton extends React.Component<EditButtonProps, {}> {}
    interface EditButtonProps {
        basePath?: string,
        record?: {}
    }

    interface FieldProps {
        source: string        
    }

    class TextField extends React.Component<FieldProps, {}> {}

    class DateField extends React.Component<FieldProps, {}> {}

    class SelectField extends React.Component<SelectFieldProps, {}> {}
    interface SelectFieldProps extends FieldProps {
        choices: {}[]
    }
 
    function required(value: any): string | undefined;
    function choices(values: any[], message: string): (value: any) => string | undefined;

    const fetchUtils: {
        fetchJson(url: string, options: {}): Promise<any>
    }
}
