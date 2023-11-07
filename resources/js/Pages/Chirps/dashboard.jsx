import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import Headers from '@/Components/Headers';
import Sidebar from '@/Components/sidebar';
import { useForm, Head } from '@inertiajs/react';
 
export default function Index({ auth }) {
    return (
<>
        <AuthenticatedLayout user={auth.user}>
            <Head title="dashboard" />
 
            <Headers/>
            <Sidebar/>

        </AuthenticatedLayout>

    
           
    </>
    );
}