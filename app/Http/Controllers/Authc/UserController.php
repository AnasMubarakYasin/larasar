<?php

namespace App\Http\Controllers\Authc;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignInRequest;
use App\Http\Requests\Auth\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function web_entry()
    {
        return inertia("Entry/Index");
    }
    public function web_signin()
    {
        return inertia("Entry/SignIn");
    }
    public function api_signin(SignInRequest $request)
    {
        $data = $request->validated();
        if (auth()->attempt(collect($data)->only(['name', 'password'])->toArray(), isset($data['remember']))) {
            session()->regenerate();

            return to_route('web.panel.index');
        } else {
            return back()->withErrors(['name' => ['username mismatch'], 'password' => ['password mismatch']]);
        }
    }
    public function web_signup()
    {
        return inertia("Entry/SignUp");
    }
    public function api_signup(SignUpRequest $request)
    {
        $data = $request->validated();
        $user = new User();
        $user->fill($data);
        $user->save();
        auth()->login($user, isset($data['remember']));
        session()->regenerate();
        return to_route('web.panel.index');
    }

    public function api_signout()
    {
        auth()->logout();
        session()->invalidate();
        session()->regenerateToken();

        return to_route('web.entry.index');
    }
}
