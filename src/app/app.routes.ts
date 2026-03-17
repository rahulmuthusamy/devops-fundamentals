import { Routes } from '@angular/router';
import { Demo } from './features/demo/demo';
import { SearchInput } from './shared/search-input/search-input';

export const routes: Routes = [
    {
        path:'',
        component:SearchInput
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
