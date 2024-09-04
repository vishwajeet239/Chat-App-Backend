import bcrypt from 'bcrypt';

const hashPassword = async (next) => {
    if(!this.isModified('password')){
        return next();
    }

    try {
        this.password = await bcrypt.hash(this.password,10);
        next();
    } catch (error) {
        next(error);
    }
}

export default hashPassword;