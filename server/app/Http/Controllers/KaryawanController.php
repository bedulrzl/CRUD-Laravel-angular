<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Karyawan;

class KaryawanController extends Controller
{
    public function index () {
        return Karyawan::all();
    }

    public function show($id){
        return Karyawan::find($id);
    }

    public function store(Request $request){
        return Karyawan::create($request->all());
    }

    public function update(Request $request, $id){
        $karyawan = Karyawan::findOrFail($id);
        $karyawan->update($request->all());

        return $karyawan;
    }

    public function delete(Request $request, $id){
        $karyawan = Karyawan::findOrFail($id);
        $karyawan->delete();

        return 204;
    }
}
