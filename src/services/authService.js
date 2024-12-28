export const login = async (email, password) => {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const socialLogin = async (provider) => {
    try {
        const response = await fetch(`/api/auth/${provider}/login`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Social login failed');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};