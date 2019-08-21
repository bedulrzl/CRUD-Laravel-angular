<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('karyawans', 'KaryawanController@index');
Route::get('karyawan/{id}', 'KaryawanController@show');
Route::post('karyawan', 'KaryawanController@store');
Route::put('karyawan/{id}', 'KaryawanController@update');
Route::delete('karyawan/{id}', 'KaryawanController@delete');
