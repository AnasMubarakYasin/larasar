<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function set(string $locale)
    {
        session()->put('locale', $locale);

        return back();
    }
}
