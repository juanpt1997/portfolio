<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        return redirect()->route('contact')->with('message', 'Message sent! Thank you so much for submitting the form, I will reach out to you as soon as I can.');
    }

}
