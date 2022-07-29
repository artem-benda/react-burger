import { useDispatch } from 'react-redux';
import { AppDispatch, AppThunk } from '../services/types';

export const useAppDispatch: () => AppDispatch | AppThunk = useDispatch;