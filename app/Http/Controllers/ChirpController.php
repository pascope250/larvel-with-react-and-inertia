<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\chirp;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // return response('hello word');

        return Inertia::render('Chirps/Index',[
            'chirps' => Chirp::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
 
        $request->user()->chirps()->create($validated);
 
        return redirect(route('chirps.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(chirp $chirp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(chirp $chirp)
    {
        //
    }

    public function crud(Request $request){
        $jsonss = json_encode(['name'=>'pascal']);
        // return response()->json($jsonss);

        return Inertia::render('Chirps/Crud');
    }
    public function select(Request $request){
        $data = Chirp::find(2);
        $jsonss = json_encode(['name'=>$data]);
        return response()->json($jsonss);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp): RedirectResponse
    {
        dd($request);
        $this->authorize('update', $chirp);
 
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
 
        $chirp->update($validated);
 
        return redirect(route('chirps.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(chirp $chirp): RedirectResponse
    {
        $this->authorize('delete', $chirp);
 
        $chirp->delete();
 
        return redirect(route('chirps.index'));
    }
    public function dashes()
     {
        return Inertia::render('Chirps/dashboard');
    }
}
