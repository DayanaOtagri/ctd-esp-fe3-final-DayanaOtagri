import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ count, page, handleChange }: { count: number, page: number, handleChange: any }) {
    return (
        <Stack spacing={2} alignItems='center' margin={3} >
            <Pagination page={page} count={count} variant="outlined" color="primary" onChange={handleChange} />
        </Stack>
    );
}